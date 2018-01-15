package com.instituicao.turma.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instituicao.turma.dto.TurmaDTO;
import com.instituicao.turma.model.Turma;
import com.instituicao.turma.model.TurmaDao;

@Service
public class TurmaServiceImp implements TurmaService {

	@Autowired
	TurmaDao turmaDao;

	@Override
	public List<TurmaDTO> getAllTurmas() {

		return turmaDao.getAllTurmas();
	}

	@Override
	public Turma getTurmaById(Long id) {

		return turmaDao.getTurmaById(id);
	}

	@Override
	public Turma getTurmaByCodigo(String codigo) {

		return turmaDao.getTurmaByCodigo(codigo);
	}

	@Override
	public Turma addTurma(Turma turma) {
		return turmaDao.addTurma(turma);
	}

	@Override
	public void updateTurma(Turma turma) {
		turmaDao.updateTurma(turma);

	}

	@Override
	public void deleteTurma(String codigo) {
		turmaDao.deleteTurma(codigo);

	}

}
