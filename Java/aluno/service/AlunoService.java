package com.instituicao.aluno.service;

import java.util.List;

import com.instituicao.aluno.model.Aluno;

public interface AlunoService {
	List<Aluno> getAllAlunos();

	Aluno getAlunoById(Long id);

	Aluno getAlunoByCPF(String cpf);

	List<Aluno> getAlunoByCidade(String cidade);

	Aluno addAluno(Aluno aluno);

	void updateAluno(Aluno aluno);

	void deleteAluno(Long id);

}
