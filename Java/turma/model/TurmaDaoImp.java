package com.instituicao.turma.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hibernate.Criteria;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.Transformers;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.instituicao.turma.dto.TurmaDTO;

@Transactional
@Repository
public class TurmaDaoImp implements TurmaDao {

	@PersistenceContext
	private EntityManager entityManager;

	@SuppressWarnings("unchecked")
	@Override
	public List<TurmaDTO> getAllTurmas() {

		Criteria crit = this.getSession().createCriteria(Turma.class);

		crit.createAlias("disciplina", "d");

		crit.setProjection(Projections.projectionList()

				.add(Projections.property("d.nome"), "disciplina")

				.add(Projections.property("codigo"), "codigo")

				.add(Projections.property("periodo"), "periodo")

				.add(Projections.property("id"), "id"));

		crit.setResultTransformer(Transformers.aliasToBean(TurmaDTO.class));

		return crit.list();
	}

	@Override
	public Turma getTurmaById(Long id) {

		Criteria crit = this.getSession().createCriteria(Turma.class);

		crit.add(Restrictions.eq("id", id));

		Turma turma = (Turma) crit.uniqueResult();

		Hibernate.initialize(turma.getAlunos());

		return turma;
	}

	@Override
	public Turma getTurmaByCodigo(String codigo) {

		Criteria crit = this.getSession().createCriteria(Turma.class);

		crit.add(Restrictions.eq("codigo", codigo));

		crit.setMaxResults(1);

		return (Turma) crit.uniqueResult();
	}

	@Override
	public Turma addTurma(Turma turma) {

		return entityManager.merge(turma);
	}

	@Override
	public void deleteTurma(String codigo) {
		entityManager.remove(getTurmaByCodigo(codigo));
	}

	@Override
	public void updateTurma(Turma turma) {
		entityManager.merge(turma);
		entityManager.flush();

	}

	@Override
	public boolean turmaExiste(String codigo) {

		Criteria criteria = this.getSession().createCriteria(Turma.class);

		criteria.add(Restrictions.eq("codigo", codigo));

		criteria.setProjection(Projections.count("id"));

		return (Long) criteria.uniqueResult() > 0;
	}

	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}

}
