package com.instituicao.aluno.avaliacao.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.instituicao.aluno.model.Aluno;
import com.instituicao.turma.model.Turma;

@Entity
@Table(name = "avaliacao")
public class Avaliacao implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "fk_turma", referencedColumnName = "id")
	private Turma turma;
	
	@ManyToOne
	@JoinColumn(name = "fk_aluno", referencedColumnName = "id")
	private Aluno aluno;
	
	@Column(name = "frequencia")
	private Double frequencia;

	@Column(name = "nota1")
	private Double nota1;

	@Column(name = "nota2")
	private Double nota2;

	private Avaliacao() {}

	private Avaliacao(Double frequencia, Double nota1, Double nota2) {
		
		this.turma = new Turma();
		this.aluno = new Aluno();
		
		this.frequencia = frequencia;
		this.nota1 = nota1;
		this.nota2 = nota2;
	}


	public Double getFrequencia() {
		return frequencia;
	}
	
	public void setFrequencia(Double frequencia) {
		this.frequencia = frequencia;
	}
	
	public Turma getTurma() {
		return turma;
	}

	public void setTurma(Turma turma) {
		this.turma = turma;
	}
	
	public Aluno getAluno() {
		return aluno;
	}

	public void setAluno(Aluno aluno) {
		this.aluno = aluno;
	}
	
	public Double getNota1() {
		return nota1;
	}

	public void setNota1(Double nota1) {
		this.nota1 = nota1;
	}

	public Double getNota2() {
		return nota2;
	}

	public void setNota2(Double nota2) {
		this.nota2 = nota2;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
