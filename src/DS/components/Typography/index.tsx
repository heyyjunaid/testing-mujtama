import React, { JSX } from "react";
import { FontWeight, TextColor, TextSize } from "@/DS/types/Typography";
import s from "./Typography.module.scss";

interface TypographyProps {
  label: string;
  size?: TextSize;
  color?: TextColor;
  fontWeight?: FontWeight;
  style?: React.CSSProperties;
  as?: React.ElementType; // optional semantic tag (p, h1, span)
}

const Typography: React.FC<TypographyProps> = ({
  label,
  size = TextSize.Base,
  color = TextColor.Default,
  fontWeight = FontWeight.Normal,
  style,
  as: Tag = "p", // default paragraph tag
}) => {
  const fontWeightClass = {
    [FontWeight.Light]: s.fontLight,
    [FontWeight.Normal]: s.fontNormal,
    [FontWeight.Medium]: s.fontMedium,
    [FontWeight.SemiBold]: s.fontSemiBold,
    [FontWeight.Bold]: s.fontBold,
  }[fontWeight];

  const colorClass = {
    [TextColor.Default]: s.textDefault,
    [TextColor.Light]: s.textLight,
    [TextColor.Primary]: s.textPrimary,
    [TextColor.Secondary]: s.textSecondary,
    [TextColor.Tertiary]: s.textTertiary,
    [TextColor.Accent]: s.textAccent,
    [TextColor.Warning]: s.textWarning,
    [TextColor.Error]: s.textError,
    [TextColor.Success]: s.textSuccess,
  }[color];

  const fontSizeClass = {
    [TextSize.Small]: s.textSm,
    [TextSize.Base]: s.textBase,
    [TextSize.Medium]: s.textBase,
    [TextSize.Large]: s.textLg,
    [TextSize.ExtraLarge]: s.textXl,
    [TextSize.DoubleExtraLarge]: s.text2xl,
  }[size];

  // Use the provided "as" prop if it's a string or component, else default to "p"

  return (
    <Tag
      className={[fontSizeClass, colorClass, fontWeightClass].join(" ")}
      style={style}
    >
      {label}
    </Tag>
  );
};

export default Typography;
