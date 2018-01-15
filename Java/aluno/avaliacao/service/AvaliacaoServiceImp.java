package com.instituicao.aluno.avaliacao.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTO;
import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTOId;
import com.instituicao.aluno.avaliacao.model.Avaliacao;
import com.instituicao.aluno.avaliacao.model.AvaliacaoDao;



@Service
public class AvaliacaoServiceImp implements AvaliacaoService {

	@Autowired
	private AvaliacaoDao avaliacaoDao;

	@Override
	public void updateDados(Avaliacao avaliacao) {
		avaliacaoDao.updateDados(avaliacao);
	}

	@Override
	public Avaliacao addAvaliacao(Avaliacao avaliacao) {

		return avaliacaoDao.addAvaliacao(avaliacao);
	}

	@Override
	public Object getAvaliacaoById(Long id) {
		
		return avaliacaoDao.getAvaliacaoById(id);
	}

	@Override
	public List<AvaliacaoDTO> getAllAvaliacoes() {
		return avaliacaoDao.getAllAvaliacoes();
	}
	
	@Override
	public void deleteAvaliacao(Long id)
	{
		 avaliacaoDao.deleteAvaliacao(id);
	}
	
	@Override
	public Avaliacao getAvaliacaoByAlunoAndTurma(Long idAluno, Long idTurma) {
		
		return avaliacaoDao.getAvaliacaoByAlunoAndTurma(idAluno, idTurma);
	}

}
