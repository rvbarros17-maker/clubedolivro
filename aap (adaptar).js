const cadastroForm = document.querySelector('#form-cadastro'); // ajuste o seletor
const telaCadastro = document.querySelector('#tela-cadastro');
const telaSucesso = document.querySelector('#tela-sucesso');

if (cadastroForm) {
  cadastroForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.querySelector('#input-nome').value;
    const email = document.querySelector('#input-email').value;
    const dataNascimento = document.querySelector('#input-data-nascimento').value;

    try {
      await addDoc(collection(db, 'requests'), {
        nome,
        email,
        dataNascimento,
        status: 'pending',
        createdAt: new Date()
      });

      // troca para a tela "Solicitação enviada!"
      telaCadastro.classList.add('hidden');
      telaSucesso.classList.remove('hidden');

    } catch (err) {
      console.error('Erro ao enviar solicitação', err);
      alert('Erro ao enviar solicitação. Tente novamente.');
    }
  });
}