package com.instituicao.aluno.avaliacao.dto;

import com.instituicao.disciplina.model.Disciplina;

public class AvaliacaoDTO {

	private Long id;
	
	private Long turma;
	
	private Disciplina fkDiscTurma;
	
	private String codigo;

	private String aluno;
	
	private Long alunoId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getTurma() {
		return turma;
	}

	public void setTurma(Long turma) {
		this.turma = turma;
	}

	public String getAluno() {
		return aluno;
	}

	public void setAluno(String aluno) {
		this.aluno = aluno;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
	public Long getAlunoId() {
		return alunoId;
	}

	public void setAlunoId(Long alunoId) {
		this.alunoId = alunoId;
	}
	
	public Disciplina getFkDiscTurma() {
		return fkDiscTurma;
	}

	public void setFkDiscTurma(Disciplina fkDiscTurma) {
		this.fkDiscTurma = fkDiscTurma;
	}



}
