interface Props {
  level: number;
  showLabel?: boolean;
  labelName?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function DifficultyMeter({ level, showLabel = false, labelName = '', size = 'md' }: Props) {
  const hue = level >= 3 ? 'hard' : 'easy';
  const dotSize = size === 'sm' ? 7 : size === 'lg' ? 12 : 10;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <span style={{ display: 'flex', gap: 4 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`diff-dot ${i <= level ? (hue === 'hard' ? 'diff-dot--hard' : 'diff-dot--easy') : 'diff-dot--empty'}`}
            style={{ width: dotSize, height: dotSize }}
          />
        ))}
      </span>
      {showLabel && labelName && (
        <span style={{ font: '400 14px var(--font-body)', color: 'var(--fg)' }}>{labelName}</span>
      )}
    </span>
  );
}
