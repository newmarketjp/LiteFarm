import React from 'react';
import ModalComponent from '../ModalComponent/v2';
import { useTranslation } from 'react-i18next';
import Button from '../../Form/Button';
import styles from './styles.module.scss';

export function PlantingTaskModal({ dismissModal, goToCatalogue }) {
  const { t } = useTranslation();
  return (
    <ModalComponent
      title={t('ADD_TASK.PLANTING_TASK')}
      contents={[t('ADD_TASK.PLANTING_TASK_MODAL')]}
      dismissModal={dismissModal}
      buttonGroup={
        <>
          <Button
            className={styles.button}
            onClick={dismissModal}
            color={'secondary'}
            type={'button'}
            sm
          >
            {t('common:CANCEL')}
          </Button>
          <Button onClick={goToCatalogue} type={'submit'} sm>
            {t('ADD_TASK.GO_TO_CATALOGUE')}
          </Button>
        </>
      }
    />
  );
}
