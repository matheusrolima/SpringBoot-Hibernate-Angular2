package com.instituicao.aluno.model;

import java.util.List;

public interface AlunoDao {
	List<Aluno> getAllAlunos();

	Aluno getAlunoById(Long id);

	Aluno getAlunoByCPF(String cpf);

	List<Aluno> getAlunoByCidade(String cidade);

	Aluno addAluno(Aluno aluno);

	void deleteAluno(Long id);

	void updateAluno(Aluno aluno);

	boolean alunoExiste(Long id);

}
