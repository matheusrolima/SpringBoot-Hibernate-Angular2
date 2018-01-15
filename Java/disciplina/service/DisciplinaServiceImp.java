package com.instituicao.disciplina.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instituicao.disciplina.model.Disciplina;
import com.instituicao.disciplina.model.DisciplinaDao;

@Service
public class DisciplinaServiceImp implements DisciplinaService {

	@Autowired
	DisciplinaDao disciplinaDao;

	@Override
	public List<Disciplina> getAllDisciplinas() {
		return disciplinaDao.getAllDisciplinas();
	}

	@Override
	public Disciplina getDisciplinaById(Long id) {
		return disciplinaDao.getDisciplinaById(id);
	}

	@Override
	public Disciplina getDisciplinaByCodigo(String codigo) {
		return disciplinaDao.getDisciplinaByCodigo(codigo);
	}

	@Override
	public List<Disciplina> getDisciplinaByNome(String nome) {
		return disciplinaDao.getDisciplinaByNome(nome);
	}

	@Override
	public Disciplina addDisciplina(Disciplina disciplina) {
		return disciplinaDao.addDisciplina(disciplina);
	}

	@Override
	public void updateDisciplina(Disciplina disciplina) {
		disciplinaDao.updateDisciplina(disciplina);

	}

	@Override
	public void deleteDisciplina(Long id) {
		disciplinaDao.deleteDisciplina(id);

	}

}
