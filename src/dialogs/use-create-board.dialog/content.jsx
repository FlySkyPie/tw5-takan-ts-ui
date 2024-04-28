/**
 * @typedef {Object} IProps
 * @property {()=>void} onClose
 */


/**
 * @param {IProps} param0 
 */
export const Content = ({ onClose }) => {
    return (
        <>
            <p>{`Hi, I'm a styled modal!`}</p>
            <button class="button primary" onClick={onClose}>Okay</button>
        </>
    );
}