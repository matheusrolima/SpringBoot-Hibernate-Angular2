package com.instituicao.disciplina.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Transactional
@Repository
public class DisciplinaDaoImp implements DisciplinaDao {

	@PersistenceContext
	EntityManager entityManager;

	@Override
	public List<Disciplina> getAllDisciplinas() {
		Criteria crit = this.getSession().createCriteria(Disciplina.class);
		return crit.list();
	}

	@Override
	public Disciplina getDisciplinaById(Long id) {

		return entityManager.find(Disciplina.class, id);
	}

	@Override
	public List<Disciplina> getDisciplinaByNome(String nome) {
		Criteria crit = this.getSession().createCriteria(Disciplina.class);
		crit.add(Restrictions.eq("nome", nome));
		return crit.list();
	}

	@Override
	public Disciplina getDisciplinaByCodigo(String codigo) {
		return entityManager.find(Disciplina.class, codigo);
	}

	@Override
	public Disciplina addDisciplina(Disciplina disciplina) {
		return entityManager.merge(disciplina);

	}

	@Override
	public void updateDisciplina(Disciplina disciplina) {
		entityManager.merge(disciplina);
		entityManager.flush();

	}

	@Override
	public void deleteDisciplina(Long id) {
		entityManager.remove(getDisciplinaById(id));

	}

	@Override
	public boolean disciplinaExiste(Long id) {
		Criteria crit = this.getSession().createCriteria(Disciplina.class);
		crit.add(Restrictions.eq("id", id));
		crit.setProjection(Projections.count("id"));

		return (Long) crit.uniqueResult() > 0;
	}

	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}

}
