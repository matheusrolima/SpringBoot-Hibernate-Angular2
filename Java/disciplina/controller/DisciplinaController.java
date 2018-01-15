package com.instituicao.disciplina.controller;

import java.util.List;
import java.util.stream.Collectors;

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

import com.instituicao.disciplina.model.Disciplina;
import com.instituicao.disciplina.service.DisciplinaService;
import com.instituicao.turma.model.SelectItem;

@Component
@CrossOrigin(origins = "http://localhost:4200")
@Path("/disciplina")
public class DisciplinaController {

	@Autowired
	DisciplinaService disciplinaService;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/disciplinas")
	public List<SelectItem> getAllDisciplinas() {
		List<Disciplina> list = disciplinaService.getAllDisciplinas();
		return list.stream().map(i -> {
			SelectItem select = new SelectItem();
			select.setLabel(i.getNome());
			select.setValue(i);
			return select;
		}).collect(Collectors.toList());
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/todasDisciplinas")
	public Response getAllDisciplina() {
		List<Disciplina> list = disciplinaService.getAllDisciplinas();
		return Response.ok(list).build();
	}

	@GET
	@Path("buscarCodigo/{codigo}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getDisciplinaByCodigo(@PathParam("codigo") String codigo) {
		Disciplina disciplina = disciplinaService.getDisciplinaByCodigo(codigo);
		return Response.ok(disciplina).build();
	}

	@GET
	@Path("buscarId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getDisciplinaById(@PathParam("id") Long id) {
		Disciplina disciplina = disciplinaService.getDisciplinaById(id);
		return Response.ok(disciplina).build();
	}

	@GET
	@Path("buscarNome/{nome}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getDisciplinaByNome(@PathParam("nome") String nome) {
		List<Disciplina> disciplina = disciplinaService.getDisciplinaByNome(nome);
		return Response.ok(disciplina).build();
	}

	@POST
	@Path("/cadastrarDisciplina")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response cadastrar(Disciplina disciplina) {
		if (disciplinaService.getDisciplinaByCodigo(disciplina.getCodigo()) != null) {
			return Response.status(Status.CONFLICT).build();
		}

		disciplina = disciplinaService.addDisciplina(disciplina);
		return Response.accepted(disciplina.getId()).build();
	}

	@DELETE
	@Path("/deletar/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteDisciplina(@PathParam("id") Long id) {
		disciplinaService.deleteDisciplina(id);
		return Response.noContent().build();
	}

	@PUT
	@Path("/update")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateDisciplina(Disciplina disciplina) {
		disciplinaService.updateDisciplina(disciplina);
		return Response.ok(disciplina).build();
	}

}
