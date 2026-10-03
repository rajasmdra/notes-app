import React from "react";
import { FiArchive, FiRotateCcw, FiTrash2 } from "react-icons/fi";
import { showFormattedDate } from "../utils";
import ActionButton from "./ActionButton";

function NoteDetail({ note, onDelete, onArchive }) {
    return (
        <div className="detail-page">
            <h1 className="detail-page__title">{note.title}</h1>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <p className="detail-page__body">{note.body}</p>

            <div className="detail-page__action">
                <ActionButton 
                    title={note.archived ? "Pindahkan" : "Arsipkan"}
                    onClick={() => onArchive(note.id)}
                    icon={note.archived ? <FiRotateCcw /> : <FiArchive />}
                />
                <ActionButton 
                    title="Hapus"
                    onClick={() => onDelete(note.id)}
                    icon={<FiTrash2 />}
                />
            </div>
        </div>
    )
}

export default NoteDetail;