package com.instituicao.aluno.avaliacao.service;

import java.util.List;

import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTO;
import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTOId;
import com.instituicao.aluno.avaliacao.model.Avaliacao;

public interface AvaliacaoService {
	
	Avaliacao addAvaliacao(Avaliacao avaliacao);
	
	void updateDados(Avaliacao avaliacao);
	
	List<AvaliacaoDTO> getAllAvaliacoes();
	
	Object getAvaliacaoById(Long id);
	
	void deleteAvaliacao(Long id);
	
	Avaliacao getAvaliacaoByAlunoAndTurma(Long idAluno, Long idTurma);
}
