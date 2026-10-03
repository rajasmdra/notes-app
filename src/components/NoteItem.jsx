import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";

function NoteItem({ note, searchKeyword = ''}) {
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
                <Link to={`/notes/${note.id}`}>{highlightText(note.title, searchKeyword)}</Link>
            </h3>
            <p className="note-item__createdAt">
                {showFormattedDate(note.createdAt)}
            </p>
            <p className="note-item__body">
                {highlightText(note.body, searchKeyword)}
            </p>
        </div>
    )
}

export default NoteItem;