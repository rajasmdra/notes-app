import React from "react";
import { FiArchive, FiRotateCcw, FiTrash2 } from "react-icons/fi";
import { showFormattedDate } from "../utils";

function NoteDetail({ note, onDelete, onArchive }) {
    return (
        <div className="detail-page">
            <h1 className="detail-page__title">{note.title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <p className="detail-page__body">{note.body}</p>

            <div className="detail-page__action">
                <button 
                    className="action" 
                    type="button"
                    title={note.archived ? "Pindahkan" : "Arsipkan"}
                    onClick={() => onArchive(note.id)}
                >
                    {note.archived ? <FiRotateCcw /> : <FiArchive />}
                </button>
                <button 
                    className="action" 
                    type="button"
                    title="Hapus"
                    onClick={() => onDelete(note.id)}
                >
                    <FiTrash2 />
                </button>
            </div>
        </div>
    )
}

export default NoteDetail;