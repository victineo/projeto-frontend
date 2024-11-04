import styles from './InputField.module.css';

export function InputField({ label, type, placeholder, value, onChange, icon }) {
    return (
        <div className={styles.inputFieldContainer}>
            {label && <label className="input-field-label">{label}</label>}
            <div className={styles.inputWrapper}>
                {icon && <span className={styles.icon}>{icon}</span>}
                <input
                    className={styles.inputField}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
