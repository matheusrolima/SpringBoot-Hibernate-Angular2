package com.instituicao.aluno.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instituicao.aluno.model.Aluno;
import com.instituicao.aluno.model.AlunoDao;

@Service
public class AlunoServiceImp implements AlunoService {

	@Autowired
	private AlunoDao alunoDao;

	@Override
	public List<Aluno> getAllAlunos() {
		return alunoDao.getAllAlunos();
	}

	@Override
	public Aluno getAlunoByCPF(String cpf) {
		return alunoDao.getAlunoByCPF(cpf);
	}

	@Override
	public List<Aluno> getAlunoByCidade(String cidade) {
		return alunoDao.getAlunoByCidade(cidade);
	}

	@Override
	public Aluno addAluno(Aluno aluno) {
		return alunoDao.addAluno(aluno);
	}

	@Override
	public void updateAluno(Aluno aluno) {
		alunoDao.updateAluno(aluno);

	}

	@Override
	public void deleteAluno(Long id) {
		alunoDao.deleteAluno(id);

	}

	@Override
	public Aluno getAlunoById(Long id) {
		Aluno aluno = alunoDao.getAlunoById(id);
		return aluno;
	}

}
