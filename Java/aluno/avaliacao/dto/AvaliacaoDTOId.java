package com.instituicao.aluno.avaliacao.dto;

import java.util.Date;

public class AvaliacaoDTOId {

	private Long id;
	
	private String alunoNome;
	
	private String alunoCpf;
	
	private String alunoSexo;
	
	private Date alunoNascimento;
	
	private String alunoCidade;
	
	private Double frequencia;
	
	private Double nota1;
	
	private Double nota2;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAlunoNome() {
		return alunoNome;
	}

	public void setAlunoNome(String alunoNome) {
		this.alunoNome = alunoNome;
	}

	public String getAlunoCpf() {
		return alunoCpf;
	}

	public void setAlunoCpf(String alunoCpf) {
		this.alunoCpf = alunoCpf;
	}

	public String getAlunoSexo() {
		return alunoSexo;
	}

	public void setAlunoSexo(String alunoSexo) {
		this.alunoSexo = alunoSexo;
	}

	public Date getAlunoNascimento() {
		return alunoNascimento;
	}

	public void setAlunoNascimento(Date alunoNascimento) {
		this.alunoNascimento = alunoNascimento;
	}

	public String getAlunoCidade() {
		return alunoCidade;
	}

	public void setAlunoCidade(String alunoCidade) {
		this.alunoCidade = alunoCidade;
	}

	public Double getFrequencia() {
		return frequencia;
	}

	public void setFrequencia(Double frequencia) {
		this.frequencia = frequencia;
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

	
	
	
}
