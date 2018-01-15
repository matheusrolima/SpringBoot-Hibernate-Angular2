package com.instituicao.turma.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.instituicao.aluno.model.Aluno;
import com.instituicao.disciplina.model.Disciplina;

@Entity
@Table(name = "turma")
public class Turma implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "fk_disc", referencedColumnName = "id")
	private Disciplina disciplina;

	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.REFRESH)
	private Collection<Aluno> alunos;

	@Column(name = "periodo")
	private String periodo;

	@Column(name = "codigo")
	private String codigo;

	public Turma() {
	}

	public Turma(String periodo, String codigo) {

		this.disciplina = new Disciplina();
		
		if (this.alunos == null) {
			this.alunos = new ArrayList<Aluno>();
		}
		this.periodo = periodo;
		this.codigo = codigo;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Disciplina getDisciplina() {
		return disciplina;
	}

	public void setDisciplina(Disciplina disciplina) {
		this.disciplina = disciplina;
	}

	public Collection<Aluno> getAlunos() {
		return alunos;
	}

	public void setAlunos(Collection<Aluno> alunos) {
		this.alunos = alunos;
	}

	public String getPeriodo() {
		return periodo;
	}

	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}

}
