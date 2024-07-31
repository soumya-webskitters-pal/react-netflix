import "./assets/css/Modal.css";
// function Modal({ setIsOpen }, Title, modalData, refModal) {
function Modal({ setIsOpen }, isOpen) {
    console.log("call", isOpen);
    return <>
        <div className="modal_backdrop" onClick={() => setIsOpen(false)}>
            <div className="modal fade">
                <button className="modal_closeBtn" onClick={() => setIsOpen(false)}>Close</button>
                <div className="modal_dialog">
                    <div className="modal_wrapper container">
                        <div className="modal_inner">
                            <div className="modal_header"><h2>Modal Title</h2></div>
                            <div className="modal_body">
                                <p> modal Data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


    // if (modalData != undefined) {
    // return <>
    //     <div className="modal_backdrop" onClick={() => setIsOpen(false)}>
    //         <div className={refModal ? `modal fade ${String(refModal).toLowerCase()}` : "modal fade"}>
    //             <button className="modal_closeBtn" onClick={() => setIsOpen(false)}>Close</button>
    //             <div className="modal_dialog">
    //                 <div className="modal_wrapper container">
    //                     <div className="modal_inner">
    //                         {Title ? <div className="modal_header"><h2>{Title}</h2></div> : null}
    //                         <div class="modal_body">
    //                             {modalData ? (
    //                                 <p>{modalData}</p>
    //                             ) : <p>no data found</p>}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </>
    // }
}
export default Modal