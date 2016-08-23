<?php

namespace Sistema\GestionBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller {
	/**
	 * @Route("/index")
	 */
	public function indexAction() {
		return $this->render ( 'SistemaGestionBundle:Default:index.html.twig' );
	}
	
	/**
	 * @Route("/postulantes")
	 */
	public function postulantesAction() {
		return $this->render ( 'SistemaGestionBundle:Default:postulantes.html.twig' );
	}
	
	/**
	 * @Route("/contrato")
	 */
	public function contratoAction() {
		return $this->render ( 'SistemaGestionBundle:Default:contrato.html.twig' );
	}
	
	/**
	 * @Route("/admofertas")
	 */
	public function admofertasAction() {
		return $this->render ( 'SistemaGestionBundle:Default:admofertas.html.twig' );
	}
	
	/**
	 * @Route("/postular")
	 */
	public function postularAction() {
		return $this->render ( 'SistemaGestionBundle:Default:postular.html.twig' );
	}
	
	/**
	 * @Route("/ofertas")
	 */
	public function ofertasAction() {
		return $this->render ( 'SistemaGestionBundle:Default:ofertas.html.twig' );
	}
	
	/**
	 * @Route("/wizard")
	 */
	public function wizardAction() {
		return $this->render ( 'SistemaGestionBundle:Default:wizard.html.twig' );
	}
	
	/**
	 * @Route("/conductor")
	 */
	public function conductorAction() {
		return $this->render ( 'SistemaGestionBundle:Default:conductor.html.twig' );
	}
	
	/**
	 * @Route("/empleo")
	 */
	public function empleoAction() {
		return $this->render ( 'SistemaGestionBundle:Default:empleo.html.twig' );
	}
	
	/**
	 * @Route("/sancion")
	 */
	public function sancionAction() {
		return $this->render ( 'SistemaGestionBundle:Default:sancion.html.twig' );
	}
}
