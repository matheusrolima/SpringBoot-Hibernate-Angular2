package com.instituicao.aluno.avaliacao.model;

import java.util.List;

import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTO;
import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTOId;

public interface AvaliacaoDao {

	Avaliacao addAvaliacao(Avaliacao avaliacao);

	Object getAvaliacaoById(Long id);
	
	List<AvaliacaoDTO> getAllAvaliacoes();

	void updateDados(Avaliacao avaliacao);
	
	void deleteAvaliacao(Long id);
	
	Avaliacao getAvaliacaoByAlunoAndTurma(Long idAluno, Long idTurma);

}
