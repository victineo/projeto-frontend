import styles from './InputField.module.css'

export function InputField({ label, type, placeholder, value, onChange }) {
    return (
        <div className={styles.inputFieldContainer}>
            <label className='input-field-label'>{label}</label>
            <input
                className={styles.inputField}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}