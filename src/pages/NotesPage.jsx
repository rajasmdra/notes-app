import React from "react";
import NotesList from "../components/NotesList";
import { getActiveNotes, getArchivedNotes } from "../utils/local-data"
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";

function NotesPageWrapper(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';

    function changeSearchParams(keyword) {
        setSearchParams({ keyword })
    }

    return (
        <NotesPage 
            {...props}
            defaultKeyword={keyword} 
            keywordChange={changeSearchParams} 
        />
    )
}

class NotesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: props.archived ? getArchivedNotes() : getActiveNotes(),
            keyword: this.props.defaultKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.archived !== this.props.archived) {
            this.setState({
                notes: this.props.archived ? getArchivedNotes() : getActiveNotes()
            })
        }
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
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>{this.props.archived ? 'Catatan Arsip' : 'Catatan Aktif'} ({filteredNotes.length})</h2>
                <NotesList 
                    notes={filteredNotes}
                    searchKeyword={this.state.keyword}
                />
            </section>
        )
    }
}

export default NotesPageWrapper;