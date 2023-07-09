import styles from './button.module.scss';
import classNames from 'classnames';

export interface ButtonProps {
    className?: string;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Button = ({ className, label, onClick }: ButtonProps) => {
    return (
        <button className={classNames(styles.root, className, styles.button)} onClick={onClick}>
            {label}
        </button>
    );
};
