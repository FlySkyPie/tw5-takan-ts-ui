import { useCallback, useMemo, useState } from 'preact/hooks';
import { nanoid } from 'nanoid';

import { Content } from './content';
import styles from './styles.module.scss';

/**
 * @typedef {Object} IDialogResult1
 * @property {"done"} type
 * @property {any} value
 * 
 * @typedef {Object} IDialogResult2
 * @property {"close"} type
 */

/**
 * @typedef {Object} IDialogSession
 * @property {(value: IDialogResult1|IDialogResult2) => void} resolve
 * @property {string} sessionId
 */

export const useCreateBoardDialog = () => {
    /**
     * @type [IDialogSession, React.Dispatch<IDialogSession>]
     */
    const [session, setSession] = useState();

    /**
     * @type [HTMLDialogElement, React.Dispatch<HTMLDialogElement>]
     */
    const [element, setElement] = useState();

    const handleClose = useCallback(() => {
        if (!session || !element) {
            return;
        }
        session.resolve({ type: 'close' });
        element.close();
    }, [element, session]);

    const openDialog = useCallback(() => new Promise((resolve, reject) => {
        if (!element) {
            reject("No HTMLDialogElement found");
            return;
        }
        element.showModal();
        setSession({ resolve, sessionId: nanoid() });
    }), [element]);

    const dialogView = useMemo(() => {
        return (
            <dialog ref={setElement} class={styles.styledModal}>
                <Content onClose={handleClose} />
            </dialog>
        );
    }, [handleClose]);

    return { openDialog, dialogView };
};
