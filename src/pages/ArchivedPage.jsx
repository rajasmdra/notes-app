import React from "react";
import NotesList from "../components/NotesList";
import { getArchivedNotes } from "../utils/local-data"

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: this.props.defaultKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword
            }
        })
        
        this.props.keywordChange(keyword);
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            const keyword = this.state.keyword.toLowerCase();
            return (
                note.title.toLowerCase().includes(keyword) ||
                note.body.toLowerCase().includes(keyword)
            )
        });

        return (
            <section>
                <h2>Catatan Arsip ({filteredNotes.length})</h2>
                <NotesList notes={filteredNotes}/>
            </section>
        )
    }
}

export default ArchivedPage;