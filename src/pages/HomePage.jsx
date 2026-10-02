import React from "react";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data"

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
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
                <h2>Catatan Aktif ({filteredNotes.length})</h2>
                <NotesList notes={filteredNotes}/>
            </section>
        )
    }
}

export default HomePage;