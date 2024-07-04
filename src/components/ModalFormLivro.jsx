const ModalFormLivro = () => {
  return (
    <dialog>
      <form method="dialog">
        <h1>Adicionar Livro</h1>
        <input type="text" id="book_title" name="book_title" placeholder="Título" maxlength="100" required />
        <input type="text" id="book_author" name="book_author" placeholder="Autor" maxlength="100" required />
        <input type="number" id="book_pages" name="book_pages" placeholder="Páginas" min="0" max="10000" required />
        <div>
          <label for="status">Lido?</label>
          <input type="checkbox" name="book_status" id="status" />
        </div>
        <button id="done">Pronto!</button>
      </form>
    </dialog>
  )
}

export default ModalFormLivro
