package com.instituicao.disciplina.model;

import java.util.List;

public interface DisciplinaDao {

	List<Disciplina> getAllDisciplinas();

	Disciplina getDisciplinaById(Long id);

	List<Disciplina> getDisciplinaByNome(String nome);

	Disciplina getDisciplinaByCodigo(String codigo);

	Disciplina addDisciplina(Disciplina disciplina);

	void updateDisciplina(Disciplina disciplina);

	void deleteDisciplina(Long id);

	boolean disciplinaExiste(Long id);

}
