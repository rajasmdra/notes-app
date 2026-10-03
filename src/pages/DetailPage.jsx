import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";

function DetailPageWrapper()  {
    const { id } = useParams();
    const navigate = useNavigate();

    return <DetailPage id={id} navigate={navigate}/>;
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id)
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler() {
        deleteNote(this.props.id);
        this.props.navigate('/');
    }

    onArchiveHandler() {
        if (this.state.note.archived) {
            unarchiveNote(this.props.id);
        } else {
            archiveNote(this.props.id);
        }

        this.setState({
            note: getNote(this.props.id)
        });
    }

    render() {
        if (this.state.note === null) {
            return <p>Note is not found!</p>
        }

        return (
            <section>
                <NoteDetail
                    note={this.state.note}
                    onDelete={this.onDeleteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </section>
        )
    }
}

export default DetailPageWrapper;