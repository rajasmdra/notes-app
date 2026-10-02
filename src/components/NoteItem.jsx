import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ note, serachKeyword = ''}) {
    const highlightText = (text, keyword) => {
        if (!keyword || !keyword.trim()) return text;

        const regex = new RegExp(`(${keyword})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) =>
            part.toLowerCase() === keyword.toLowerCase()
                ? (<mark key={index}>{part}</mark>)
                : (part)
        );
    };

    return (
        <div className="note-item">
            <h3 className="note-item__title">
                {highlightText(note.title, serachKeyword)}
            </h3>
            <p className="note-item__date">
                {showFormattedDate(note.createdAt)}
            </p>
            <p className="note-item__body">
                {highlightText(note.body, serachKeyword)}
            </p>
        </div>
    )
}

export default NoteItem;