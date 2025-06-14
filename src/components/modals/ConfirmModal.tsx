import { useLocale } from '../LocaleContext';
import { getTranslation } from '../../i18n/i18n';
import styles from './ConfirmModal.module.css';

interface ConfirmModalProps {
  scope: string;
  id: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({ scope, id, onConfirm, onCancel }: ConfirmModalProps) {
  const { locale } = useLocale();
  const message = getTranslation(scope, id, locale);
  const yesLabel = getTranslation('global', 'yes', locale);
  const noLabel = getTranslation('global', 'no', locale);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonRow}>
          <button className={styles.yesButton} onClick={onConfirm}>{yesLabel}</button>
          <button className={styles.noButton} onClick={onCancel}>{noLabel}</button>
        </div>
      </div>
    </div>
  );
}
