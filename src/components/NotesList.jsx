import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, searchKeyword}) {
    const hasNotes = Boolean(notes && notes.length > 0);

    if (!hasNotes) {
        return (
            <div className="notes-list-empty">
                <p>Tidak ada catatan</p>
            </div>
        );
    };

    const groupedNotes = notes.reduce((groups, note) => {
        const date = new Date(note.createdAt);
        const monthYear = date.toLocaleString('id-ID', { month: 'long', year: 'numeric' });

        if (!groups[monthYear]) {
            groups[monthYear] = [];
        }
        groups[monthYear].push(note);
        return groups;
    }, {});

    return (
        <div className="notes-list">
            {Object.entries(groupedNotes).map(([monthYear, groupNotes]) => (
                <section className="notes-group" key={monthYear}>
                    <div className="notes-group-header">
                        <h2 className="notes-group-title">{monthYear}</h2>
                        <p className="notes-group-count">{groupNotes.length} catatan</p>
                    </div>
                    {groupNotes.map((note) => (
                        <NoteItem
                        key={note.id}
                        note={note}
                        searchKeyword={searchKeyword}
                        />
                    ))}
                </section>
            ))}
        </div>
    )
}

export default NotesList;