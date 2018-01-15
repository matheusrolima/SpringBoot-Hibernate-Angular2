package com.instituicao.aluno.avaliacao.model;

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

import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTO;
import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTOId;

@Transactional
@Repository
public class AvaliacaoDaoImp implements AvaliacaoDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void updateDados(Avaliacao avaliacao) {
		entityManager.merge(avaliacao);
		entityManager.flush();
	}

	@Override
	public Avaliacao addAvaliacao(Avaliacao avaliacao) {
		return entityManager.merge(avaliacao);
	}

	/*@Override
	public Avaliacao getAvaliacaoById(Long id) {

		Criteria crit = this.getSession().createCriteria(Avaliacao.class);

		crit.add(Restrictions.eq("id", id));

		Avaliacao avaliacao = (Avaliacao) crit.uniqueResult();
		
		Hibernate.initialize(avaliacao.getTurma().getAlunos());
		
		return avaliacao;
	}*/
	
	@Override
	public Object getAvaliacaoById(Long id) {
		
		Criteria crit = this.getSession().createCriteria(Avaliacao.class);
		
		crit.createAlias("aluno", "a");
		
		crit.add(Restrictions.eq("id", id));
		
		crit.setProjection(Projections.projectionList()
			
		.add(Projections.property("id"), "id")		
		
		.add(Projections.property("a.nome"), "alunoNome")
		
		.add(Projections.property("a.cpf"), "alunoCpf")
		
		.add(Projections.property("a.sexo"), "alunoSexo")
		
		.add(Projections.property("a.dtNasc"), "alunoNascimento")
		
		.add(Projections.property("a.cidade"), "alunoCidade")
		
		.add(Projections.property("frequencia"), "frequencia")
		
		.add(Projections.property("nota1"), "nota1")
		
		.add(Projections.property("nota2"), "nota2"));
		
		crit.setResultTransformer(Transformers.aliasToBean(AvaliacaoDTOId.class));

		return  crit.uniqueResult();
		
		
	}

	@Override
	public List<AvaliacaoDTO> getAllAvaliacoes() {
		Criteria crit = this.getSession().createCriteria(Avaliacao.class);

		crit.createAlias("turma", "t");

		crit.createAlias("aluno", "a");

		crit.setProjection(Projections.projectionList()

				.add(Projections.property("t.id"), "turma")

				.add(Projections.property("t.codigo"), "codigo")

				.add(Projections.property("a.nome"), "aluno")

				.add(Projections.property("a.id"), "alunoId")
				
				.add(Projections.property("t.disciplina"), "fkDiscTurma")

				.add(Projections.property("id"), "id"));

		crit.setResultTransformer(Transformers.aliasToBean(AvaliacaoDTO.class));

		return crit.list();
	}
	
	@Override
	public void deleteAvaliacao(Long id)
	{
		Criteria crit = this.getSession().createCriteria(Avaliacao.class);
		crit.add(Restrictions.eq("id", id));
		
		entityManager.remove(crit.uniqueResult());
	}
	@Override
	public Avaliacao getAvaliacaoByAlunoAndTurma(Long idAluno, Long idTurma) {
		
		Criteria crit = this.getSession().createCriteria(Avaliacao.class);

		crit.createAlias("aluno","al");
		
		crit.createAlias("turma","t");
		
		crit.add(Restrictions.eq("al.id", idAluno));
		crit.add(Restrictions.eq("t.id", idTurma));
		
		Avaliacao avaliacao = (Avaliacao) crit.uniqueResult();
		
		Hibernate.initialize(avaliacao.getTurma().getAlunos());
		
		return avaliacao;
		
		
		
	}
	public Session getSession() {

		return (Session) this.entityManager.getDelegate();
	}
}
