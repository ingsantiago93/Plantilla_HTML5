/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function config_inicial() {
    return {
        "curso": "Transferencia de conocimiento",
        "unidad": {
            "numero": 1,
            "nombre": "Pedagodía de lenguas extranjeras I",
            "lugar": "Inglaterra",
            "bandera": "img/bandera_colombia.svg",
            "descripcion": "Enfoques 3 Enseñanza de lenguas para propósitos específicos y pedagogía por proyectos"
        },
        "leccion": {
            "numero": 1,
            "nombre": "Uso TIC parte 1",
            "lugar": "Londres",
            "descripcion": "¿Cuales estrategias implementar en las sesiones formativas de IPE en el Sena?"
        },
        "tema": {
            "numero": 1,
            "nombre": "Qué se entiende por TIC?",
            "lugar": "Aeropuerto Heathrow"
        },
        "macrorecursos": {
            "1": {
                "id": "s_apertura",
                "nombre": "Sensibilización de apertura",
                "recursos": {
                    "1": {
                        "nombre": "nombre del recurso 1",
                        "tipo": "layout",
                        "estilo": "layout_1",
                        "componentes": {
                            "1": {
                                "tipo": "titulo",
                                "estilo": "titulo_recurso",
                                "elementos": {
                                    "1": {
                                        "tipo": "texto",
                                        "contenido": {
                                            "texto": "Marco en el aeropuerto"
                                        }
                                    }
                                }
                            },
                            "2": {
                                "tipo": "reproductor",
                                "estilo": "estandar",
                                "elementos": {
                                    "1": {
                                        "tipo": "video",
                                        "contenido": {
                                            "url": "media/videos/video01.mp4"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "2": {
                "id": "contextualizacion",
                "nombre": "Contextualización",
                "recursos": {
                    "1": {
                        "nombre": "nombre del recurso 2",
                        "tipo": "layout",
                        "estilo": "layout_3",
                        "componentes": {
                            "1": {
                                "tipo": "titulo",
                                "estilo": "titulo_recurso",
                                "elementos": {
                                    "1": {
                                        "tipo": "texto",
                                        "contenido": {
                                            "texto": "Marco en el aeropuerto"
                                        }
                                    }
                                }
                            },
                            "2": {
                                "tipo": "reproductor",
                                "estilo": "estandar",
                                "elementos": {
                                    "1": {
                                        "tipo": "video",
                                        "contenido": {
                                            "url": "media/videos/video01.mp4"
                                        }
                                    }
                                }
                            },
                            "3": {
                                "tipo": "organizador_grafico",
                                "estilo": "organizador_grafico3",
                                "elementos": {
                                    "1": {
                                        "tipo": "imagen",
                                        "contenido": {
                                            "url": "img/imagen.png"
                                        }
                                    },
                                    "2": {
                                        "tipo": "menu_tabs",
                                        "contenido": {
                                            "tabs": {
                                                "1": {
                                                    "tag": "mi tab 1",
                                                    "texto": "este es mi parrafo ligado a la viñeta 1"
                                                },
                                                "2": {
                                                    "tag": "mi tab 2",
                                                    "texto": "este es mi parrafo ligado a la viñeta 2"
                                                },
                                                "3": {
                                                    "tag": "mi tab 3",
                                                    "texto": "este es mi parrafo ligado a la viñeta 3"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "3": {
                "id": "contenido",
                "nombre": "Contenidos/Actividades",
                "recursos": {
                    "1": {
                        "nombre": "nombre del recurso 4",
                        "tipo": "layout",
                        "estilo": "layout_5",
                        "componentes": {
                            "1": {
                                "tipo": "instruccion",
                                "estilo": "instruccion_transferencia",
                                "elementos": {
                                    "1": {
                                        "tipo": "texto",
                                        "contenido": {
                                            "texto": "",
                                            "segmento": "contexto"
                                        }
                                    },
                                    "2": {
                                        "tipo": "texto",
                                        "contenido": {
                                            "texto": "",
                                            "segmento": "instruccion"
                                        }
                                    }
                                }
                            },
                            "2": {
                                "tipo": "drag and drop",
                                "estilo": "dragdrop_horizontal",
                                "elementos": {
                                    "1": {
                                        "tipo": "drags",
                                        "contenido": {
                                            "tipo": "imagen",
                                            "drags": {
                                                "1": {
                                                    "url": "img/imagen1.png"
                                                },
                                                "2": {
                                                    "url": "img/imagen2.png"
                                                },
                                                "3": {
                                                    "url": "img/imagen3.png"
                                                },
                                                "4": {
                                                    "url": "img/imagen4.png"
                                                }
                                            }
                                        }
                                    },
                                    "2": {
                                        "tipo": "drops",
                                        "contenido": {
                                            "tipo": "contenedor",
                                            "drops": {
                                                "1": {
                                                    "texto": "Masculinos",
                                                    "acepta": ["1", "3"]
                                                },
                                                "2": {
                                                    "texto": "Femeninos",
                                                    "acepta": ["2", "4"]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
}