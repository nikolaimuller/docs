import styles from "./button.module.css";

const cx = (...args: string[]): string => [...args].join(" ");

export enum ButtonSize {
	Small = "small",
	Medium = "medium",
}

export type ButtonProps = {
	children: string;
	disabled?: boolean;
	size?: ButtonSize;
};

export const Button: React.FC<ButtonProps> & { Size: typeof ButtonSize } = ({
	children,
	disabled,
	size,
	...props
}) => {
	return (
		<button
			disabled={disabled}
			className={cx(styles["button"], styles[`button-${size}`])}
			{...props}
		>
			<span className={styles["button-label"]}>{children}</span>
		</button>
	);
};

Button.Size = ButtonSize;
