package com.instituicao.turma.service;

import java.util.List;

import com.instituicao.turma.dto.TurmaDTO;
import com.instituicao.turma.model.Turma;

public interface TurmaService {

	List<TurmaDTO> getAllTurmas();

	Turma getTurmaById(Long id);

	Turma getTurmaByCodigo(String codigo);

	Turma addTurma(Turma turma);

	void updateTurma(Turma turma);

	void deleteTurma(String codigo);

}
