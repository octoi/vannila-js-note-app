export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteEdit = onNoteEdit;
        this.onNoteDelete = onNoteDelete;

        this.root.innerHTML = `
            <div class="notes-sidebar">
                <button class="notes-add" type="button">Add Note</button>
                <div class="notes-list"></div>
            </div>
            <div class="notes-preview">
                <input type="text" class="notes-title" value="New Note" placeholder="Enter a title">
                <textarea placeholder="Take note ..." class="notes-body">Take note ...</textarea>
            </div>
        `;

        const btnAddNote = this.root.querySelector('.notes-add');
        const inpTitle = this.root.querySelector('.notes-title');
        const inpBody = this.root.querySelector('.notes-body');

        btnAddNote.addEventListener('click', () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener('blur', () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value;

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        })
    }

}