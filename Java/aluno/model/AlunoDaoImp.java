package com.instituicao.aluno.model;

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
public class AlunoDaoImp implements AlunoDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public List<Aluno> getAllAlunos() {

		Criteria crit = this.getSession().createCriteria(Aluno.class);
		return crit.list();

	}

	@Override
	public Aluno getAlunoByCPF(String cpf) {

		Criteria crit = this.getSession().createCriteria(Aluno.class);
		crit.add(Restrictions.eq("cpf", cpf));

		return (Aluno) crit.uniqueResult();
	}

	@Override
	public List<Aluno> getAlunoByCidade(String cidade) {
		Criteria crit = this.getSession().createCriteria(Aluno.class);
		crit.add(Restrictions.eq("cidade", cidade));
		return crit.list();
	}

	@Override
	public Aluno addAluno(Aluno aluno) {
		return entityManager.merge(aluno);

	}

	@Override
	public void deleteAluno(Long id) {
		entityManager.remove(getAlunoById(id));

	}

	@Override
	public void updateAluno(Aluno aluno) {
		entityManager.merge(aluno);
		entityManager.flush();

	}

	@Override
	public boolean alunoExiste(Long id) {
		Criteria crit = this.getSession().createCriteria(Aluno.class);
		crit.add(Restrictions.eq("id", id));
		crit.setProjection(Projections.count("id"));

		return (Long) crit.uniqueResult() > 0;

	}

	@Override
	public Aluno getAlunoById(Long id) {

		Criteria crit = this.getSession().createCriteria(Aluno.class);
		crit.add(Restrictions.eq("id", id));

		return (Aluno) crit.uniqueResult();
	}

	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}

}
