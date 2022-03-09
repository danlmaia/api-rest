import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Daniel',
      sobrenome: 'Maia',
      email: 'daniel@gmail.com',
      idade: 22,
      peso: 75,
      altura: 1.82,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
