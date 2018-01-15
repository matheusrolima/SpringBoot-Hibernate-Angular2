package com.instituicao.turma.controller;

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

import com.instituicao.turma.dto.TurmaDTO;
import com.instituicao.turma.model.Turma;
import com.instituicao.turma.service.TurmaService;

@Component
@CrossOrigin(origins = "http://localhost:4200")
@Path("/turma")
public class TurmaController {


	@Autowired
	TurmaService turmaService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/turmas")
	public Response getAllTurmas() {

		List<TurmaDTO> list = turmaService.getAllTurmas();

		return Response.ok(list).build();
	}

	@GET
	@Path("buscarId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTurmaById(@PathParam("id") Long id) {
		Turma turma = turmaService.getTurmaById(id);
		return Response.ok(turma).build();
	}

	@GET
	@Path("buscarCodigo/{codigo}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTurmaByCodigo(@PathParam("codigo") String codigo) {
		Turma turma = turmaService.getTurmaByCodigo(codigo);
		return Response.ok(turma).build();
	}

	@DELETE
	@Path("/deletar/{codigo}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteTurma(@PathParam("codigo") String codigo) {
		turmaService.deleteTurma(codigo);
		return Response.noContent().build();
	}

	@PUT
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateTurma(Turma turma) {
		turmaService.updateTurma(turma);
		return Response.ok(turma).build();
	}

	@POST
	@Path("/cadastrarTurma")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response Cadastrar(Turma turma) {

		if (turmaService.getTurmaByCodigo(turma.getCodigo()) != null) {

			return Response.status(Status.CONFLICT).build();
		}

		turma = turmaService.addTurma(turma);
		return Response.accepted(turma.getId()).build();

	}

}
