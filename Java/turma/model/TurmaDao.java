package com.instituicao.turma.model;

import java.util.List;

import com.instituicao.turma.dto.TurmaDTO;

public interface TurmaDao {

	List<TurmaDTO> getAllTurmas();

	Turma getTurmaById(Long id);

	Turma getTurmaByCodigo(String codigo);

	Turma addTurma(Turma turma);

	void deleteTurma(String codigo);

	void updateTurma(Turma turma);

	boolean turmaExiste(String codigo);

}
