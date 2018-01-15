package com.instituicao.aluno.avaliacao.controller;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTO;
import com.instituicao.aluno.avaliacao.dto.AvaliacaoDTOId;
import com.instituicao.aluno.avaliacao.model.Avaliacao;
import com.instituicao.aluno.avaliacao.service.AvaliacaoService;

@Component
@CrossOrigin(origins = "http://localhost:4200")
@Path("/avaliacao")
public class AvaliacaoController {

	@Autowired
	AvaliacaoService avaliacaoService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/todasAvaliacoes")
	public Response getAllAvaliacoes() {
		List<AvaliacaoDTO> list = avaliacaoService.getAllAvaliacoes();
		return Response.ok(list).build();
	}

	@POST
	@Path("/cadastrarAvaliacao")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response Cadastrar(Avaliacao avaliacao) {

		if (avaliacaoService.getAvaliacaoById(avaliacao.getId()) != null) {

			return Response.status(Status.CONFLICT).build();
		}

		avaliacao = avaliacaoService.addAvaliacao(avaliacao);
		return Response.accepted(avaliacao.getId()).build();

	}

	@GET
	@Path("buscarId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAvaliacaoById(@PathParam("id") Long id) {

		Object avaliacao = avaliacaoService.getAvaliacaoById(id);
		return Response.ok(avaliacao).build();
	}
	
	@GET
	@Path("buscar/{aluno}/{turma}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAvaliacaoByAlunoAndTurma(@PathParam("aluno") Long aluno,@PathParam("turma") Long turma ) {
		
		Avaliacao avaliacao = avaliacaoService.getAvaliacaoByAlunoAndTurma(aluno,turma);
		if(avaliacao!=null) {
			return Response.ok(avaliacao).build();
			
		}
		return Response.status(Status.NOT_ACCEPTABLE).build();
	}

	@PUT
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateDados(Avaliacao avaliacao) {
		avaliacaoService.updateDados(avaliacao);
		return Response.ok(avaliacao).build();
	}
	
	@DELETE
	@Path("/deletar/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteAvaliacao(@PathParam("id") Long id) {
		avaliacaoService.deleteAvaliacao(id);
		return Response.noContent().build();
	}
}