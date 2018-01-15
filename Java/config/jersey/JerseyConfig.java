package com.instituicao.config.jersey;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import com.instituicao.aluno.avaliacao.controller.AvaliacaoController;
import com.instituicao.aluno.controller.AlunoController;
import com.instituicao.disciplina.controller.DisciplinaController;
import com.instituicao.turma.controller.TurmaController;
import com.instituicao.usuario.controller.UsuarioController;

@Component
public class JerseyConfig extends ResourceConfig {

	public JerseyConfig() {
		register(AlunoController.class);
		register(DisciplinaController.class);
		register(TurmaController.class);
		register(UsuarioController.class);
		register(AvaliacaoController.class);
	}

}
