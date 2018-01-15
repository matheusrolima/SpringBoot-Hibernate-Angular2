package com.instituicao.disciplina.service;

import java.util.List;

import com.instituicao.disciplina.model.Disciplina;

public interface DisciplinaService {
	List<Disciplina> getAllDisciplinas();

	Disciplina getDisciplinaById(Long id);

	Disciplina getDisciplinaByCodigo(String codigo);

	List<Disciplina> getDisciplinaByNome(String nome);

	Disciplina addDisciplina(Disciplina disciplina);

	void updateDisciplina(Disciplina disciplina);

	void deleteDisciplina(Long id);
}
