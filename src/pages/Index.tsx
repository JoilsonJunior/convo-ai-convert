import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import logo from "../assets/logo.png";
import logo_branca from "../assets/logo_branca.webp";
import {
  Check,
  Clock,
  Phone,
  Calendar,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Target,
  ArrowRight,
  Play,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <img src={logo} alt="Logo" className="h-10" />{" "}
            {/* Ajuste o tamanho com h-10 ou h-12 */}
          </div>
          <a
            href="https://heatcompany.typeform.com/to/qwTBEwoX?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              AGENDAR DEMONSTRAÇÃO
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-orange-100 text-orange-800 px-6 py-2 text-sm font-medium rounded-full">
            Apenas 15 implementações disponíveis este mês
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Substitua sua equipe de atendimento por
            <span className="text-blue-600 block">
              IA super humanizada que vende 24 horas por dia
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chega de salários, férias, 13º. Reduza seu tempo de atendimento para
            30 segundos.
            <br />
            <span className="font-semibold text-gray-900">
              Nossa IA humanizada liga, agenda e converte +50% a mais leads que
              humanos.
            </span>
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="https://heatcompany.typeform.com/to/qwTBEwoX?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg rounded-lg font-semibold"
              >
                <Calendar className="mr-3 h-5 w-5" />
                VER DEMONSTRAÇÃO AO VIVO
              </Button>
            </a>
            <div className="flex items-center text-gray-600">
              <Play className="mr-2 h-4 w-4" />
              <span>Vídeo: Como funciona (90s)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Sem pausa, feriado ou férias</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30s</div>
              <div className="text-gray-600">Tempo de resposta</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">+50%</div>
              <div className="text-gray-600">Mais conversões garantidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pesquisa HubSpot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
              Dados que{" "}
              <span className="text-red-600">comprovam a urgência</span>
            </h2>
            <div className="bg-blue-50 p-8 rounded-2xl mb-12">
              <div className="flex items-center justify-center mb-6">
                <span className="ml-4 text-lg font-semibold text-gray-700">
                  Pesquisa Oficial HubSpot 2024
                </span>
              </div>
              <p className="text-center text-xl text-gray-700 mb-8">
                Como o interesse do lead diminui drasticamente a cada minuto sem
                resposta
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <img
                  src="/src/assets/demo1.webp"
                  alt="Gráfico 1"
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                />
                <img
                  src="/src/assets/demo2.webp"
                  alt="Gráfico 2"
                  className="w-full md:w-1/2 rounded-lg shadow-md"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
                  Taxa de Conversão por Tempo de Resposta
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-100 rounded-lg">
                    <span className="font-semibold text-gray-900">
                      0-5 minutos
                    </span>
                    <div className="flex items-center">
                      <div className="w-40 bg-green-200 rounded-full h-4 mr-4">
                        <div
                          className="bg-green-600 h-4 rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-bold text-green-600 text-lg">
                        90%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-yellow-100 rounded-lg">
                    <span className="font-semibold text-gray-900">
                      5-30 minutos
                    </span>
                    <div className="flex items-center">
                      <div className="w-40 bg-yellow-200 rounded-full h-4 mr-4">
                        <div
                          className="bg-yellow-600 h-4 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <span className="font-bold text-yellow-600 text-lg">
                        65%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-100 rounded-lg">
                    <span className="font-semibold text-gray-900">
                      30-60 minutos
                    </span>
                    <div className="flex items-center">
                      <div className="w-40 bg-orange-200 rounded-full h-4 mr-4">
                        <div
                          className="bg-orange-600 h-4 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="font-bold text-orange-600 text-lg">
                        40%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg">
                    <span className="font-semibold text-gray-900">
                      Mais de 24 horas
                    </span>
                    <div className="flex items-center">
                      <div className="w-40 bg-red-200 rounded-full h-4 mr-4">
                        <div
                          className="bg-red-600 h-4 rounded-full"
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                      <span className="font-bold text-red-600 text-lg">5%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-red-50 border-l-4 border-l-red-500 p-8 rounded-lg mb-8">
                  <h3 className="font-bold text-red-600 text-2xl mb-4">
                    A verdade que ninguém quer ver:
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Você investe milhares para gerar leads interessados. E perde
                    95% deles porque sua equipe só trabalha 8 horas por dia, não
                    atende fim de semana e demora para responder.
                  </p>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-xl">
                  <h3 className="font-bold text-yellow-400 text-2xl mb-6">
                    Calculadora da Sua Perda Mensal:
                  </h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex justify-between">
                      <span>Leads gerados por mês:</span>
                      <span className="font-bold">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perdidos por demora no atendimento:</span>
                      <span className="font-bold text-red-400">70 (70%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valor médio por venda:</span>
                      <span className="font-bold">R$ 500</span>
                    </div>
                    <Separator className="my-4 bg-gray-700" />
                    <div className="flex justify-between text-xl">
                      <span className="font-bold">Prejuízo mensal:</span>
                      <span className="font-bold text-red-400">R$ 35.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12">
              Você já investiu{" "}
              <span className="text-red-600">pesado em marketing</span>... mas
              ainda perde dinheiro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {[
                {
                  icon: TrendingUp,
                  title: "Tráfego pago",
                  desc: "Facebook, Google, LinkedIn",
                },
                {
                  icon: Users,
                  title: "Equipe comercial",
                  desc: "Salários, treinamentos, gestão",
                },
                {
                  icon: Target,
                  title: "Processos",
                  desc: "Scripts, funis, metodologias",
                },
                {
                  icon: Clock,
                  title: "Ferramentas",
                  desc: "CRM, automações, relatórios",
                },
                {
                  icon: Phone,
                  title: "Tempo de atendimento",
                  desc: "Demora para responder leads",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-l-4 border-l-red-500 bg-white"
                >
                  <CardContent className="p-0 text-center">
                    <item.icon className="h-12 w-12 text-red-500 mb-4 mx-auto" />
                    <h3 className="font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-red-50 border-l-4 border-l-red-500 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                O resultado que você conhece bem:
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Leads esfriam nos finais de semana. Equipe não atende fora do
                horário. Cliente interessado à noite vira concorrência na
                segunda-feira.
                <span className="font-bold">
                  {" "}
                  Você paga para gerar leads e deixa 70% deles escaparem.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              A solução que você estava esperando:{" "}
              <span className="text-blue-600">
                substituição total da equipe
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-8">
                  {[
                    {
                      icon: Zap,
                      title: "Resposta em 30 segundos",
                      desc: "Contato imediato quando o lead está interessado",
                    },
                    {
                      icon: Clock,
                      title: "Funciona 24/7",
                      desc: "Madrugada, fim de semana, feriados - sempre ativo",
                    },
                    {
                      icon: Phone,
                      title: "Liga e agenda sozinho",
                      desc: "Conversação natural que realmente converte",
                    },
                    {
                      icon: Shield,
                      title: "Zero risco trabalhista",
                      desc: "Sem CLT, férias, 13º, FGTS ou dores de cabeça",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="bg-blue-100 p-4 rounded-xl">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-lg">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-10 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Antes vs Depois
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Tempo de resposta:
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-600 line-through">2-24h</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <span className="text-green-600 font-bold">30s</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Disponibilidade:
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-600 line-through">8h/dia</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <span className="text-green-600 font-bold">24h/dia</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700 font-medium">
                      Conversão:
                    </span>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-600 line-through">25%</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                      <span className="text-green-600 font-bold">+50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Esta solução é para sua empresa?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 border-l-4 border-l-green-500 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    PERFEITO PARA VOCÊ SE:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        Já investe em marketing e quer converter melhor
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        Quer eliminar custos trabalhistas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        Tem processo comercial estruturado
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-lg">
                        Busca resultados rápidos e mensuráveis
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-8 border-l-4 border-l-red-500 bg-white">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">
                    NÃO É PARA VOCÊ SE:
                  </h3>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-3 text-red-500 mt-1 text-xl">✗</span>
                      <span className="text-lg">
                        Prefere manter equipe humana tradicional
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-red-500 mt-1 text-xl">✗</span>
                      <span className="text-lg">
                        Aceita perder leads fora do horário
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-red-500 mt-1 text-xl">✗</span>
                      <span className="text-lg">
                        Não tem interesse em medir retorno
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-red-500 mt-1 text-xl">✗</span>
                      <span className="text-lg">
                        Quer continuar pagando encargos trabalhistas
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Invoicce */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Por que a Invoicce é a{" "}
              <span className="text-blue-600">única solução completa</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: Zap,
                  title: "Resposta em 30 Segundos",
                  desc: "Enquanto o concorrente ainda está dormindo, nós já estamos vendendo",
                  highlight: "30s",
                },
                {
                  icon: Users,
                  title: "IA 100% Humanizada",
                  desc: "Conversação natural testada em mais de 10.000 ligações reais",
                  highlight: "+10k",
                },
                {
                  icon: Clock,
                  title: "Cobertura Total",
                  desc: "Vendas acontecem 24/7, incluindo madrugada e feriados",
                  highlight: "24/7",
                },
                {
                  icon: Target,
                  title: "Integração Completa",
                  desc: "Se conecta com qualquer CRM sem complicação técnica",
                  highlight: "100%",
                },
                {
                  icon: TrendingUp,
                  title: "Implementação Express",
                  desc: "Sistema funcionando completamente em até 48 horas",
                  highlight: "48h",
                },
                {
                  icon: Shield,
                  title: "Suporte Especializado",
                  desc: "Time dedicado mais dashboard com métricas em tempo real",
                  highlight: "VIP",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-blue-200 text-gray-900 shadow-lg"
                >
                  <CardContent className="p-8 text-center">
                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-3">
                      {item.highlight}
                    </div>
                    <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cases e ROI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Resultados reais de clientes reais
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
              {[
                {
                  title: "Aumento de conversão",
                  desc: "Em apenas 30 dias de implementação",
                  company: "Energia Solar",
                },
                {
                  title: "Faturamento adicional",
                  desc: "Apenas nos finais de semana",
                  company: "Aluguel de máquina",
                },
                {
                  title: "Leads convertidos",
                  desc: "Vs 23% do modelo com humanos",
                  company: "Clínica médica",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-8 border-l-4 border-l-green-500 bg-white"
                >
                  <CardContent className="p-0 text-center">
          
                    <h3 className="font-bold text-gray-900 text-xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-lg">{item.desc}</p>
                    <Badge variant="outline" className="text-sm font-medium">
                      {item.company}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Dashboard Real - Performance dos Últimos 30 Dias
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1.247
                  </div>
                  <div className="text-gray-600">Leads contatados</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    891
                  </div>
                  <div className="text-gray-600">Reuniões agendadas</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    28s
                  </div>
                  <div className="text-gray-600">Tempo médio resposta</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    71.4%
                  </div>
                  <div className="text-gray-600">Taxa de conversão</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Pacing */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">
              Imagine sua empresa vendendo{" "}
              <span className="text-yellow-300">
                sem você precisar estar presente
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
                <h3 className="font-bold text-xl mb-4">
                  Segunda-feira, 8h da manhã:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Você abre o computador e encontra 15 reuniões já agendadas
                  para a semana. Sua IA trabalhou no fim de semana enquanto você
                  descansava com a família.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
                <h3 className="font-bold text-xl mb-4">
                  Sua equipe de vendas:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Só recebe reuniões qualificadas. Sem perder tempo com lead
                  frio. Sem pressão por velocidade. Sem desperdiçar seu
                  investimento em tráfego.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
                <h3 className="font-bold text-xl mb-4">
                  Seu retorno sobre investimento:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Cada real investido em marketing agora tem retorno garantido.
                  Leads não esfriam mais. Oportunidades não escapam. Vendas
                  acontecem.
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur">
                <h3 className="font-bold text-xl mb-4">
                  Sua tranquilidade total:
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Fim de semana, feriado, madrugada - sua empresa vende 24 horas
                  por dia com a mesma qualidade e eficiência. Sem dor de cabeça
                  trabalhista.
                </p>
              </div>
            </div>
            <p className="text-2xl text-yellow-300 font-bold">
              Essa realidade está a apenas 48 horas de distância.
            </p>
          </div>
        </div>
      </section>

      {/* O que recebe */}
      {/* Section removed as per request */}

      {/* CTA Principal */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Pare de perder dinheiro hoje mesmo
            </h2>
            <p className="text-xl lg:text-2xl opacity-90 mb-12 leading-relaxed">
              Agende uma demonstração ao vivo e veja como aumentar sua conversão
              em 50% nos próximos 30 dias
            </p>

            <div className="bg-white p-12 rounded-2xl text-gray-900 mb-12">
              <h3 className="text-2xl font-bold mb-8">
                Na demonstração você vai ver:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  "Como a IA liga e agenda reuniões em tempo real",
                  "Integração completa com seu CRM atual",
                  "Dashboard com métricas e resultados ao vivo",
                  "Casos reais de clientes do seu setor",
                  "Cronograma de implementação personalizado",
                  "Cálculo do ROI específico para sua empresa",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="mr-4 h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="https://heatcompany.typeform.com/to/qwTBEwoX?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 text-xl font-bold rounded-xl"
              >
                <Calendar className="mr-4 h-6 w-6" />
                AGENDAR DEMONSTRAÇÃO GRATUITA
              </Button>
            </a>
            <p className="text-sm opacity-75 mt-6">
              Demonstração de 30 minutos • Sem compromisso • Resposta em até 2
              horas
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
              Perguntas mais frequentes
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "A IA vai parecer robô e afastar meus clientes?",
                  answer:
                    "Absolutamente não. Nossa conversação é 100% natural e foi validada em mais de 10.000 ligações reais com clientes de diversos setores. Os prospects não conseguem distinguir da conversa humana porque desenvolvemos scripts personalizados para cada tipo de negócio.",
                },
                {
                  question:
                    "O investimento não é alto demais para minha empresa?",
                  answer:
                    "Pelo contrário. O investimento mensal é menor que o salário de 1 funcionário CLT (sem contar encargos, férias, 13º, FGTS) e trabalha 3x mais horas. Nossos clientes recuperam o investimento em 30-60 dias através do aumento de conversão.",
                },
                {
                  question:
                    "Se já tenho equipe comercial, por que preciso da IA?",
                  answer:
                    "Para cobrir exatamente o que sua equipe humana não consegue: madrugada, fim de semana, férias, feriados. Sua equipe fica livre para focar apenas em reuniões qualificadas, não em prospecção básica e correria para responder leads.",
                },
                {
                  question:
                    "Quanto tempo demora para começar a ver resultados?",
                  answer:
                    "Implementação completa em até 48 horas. Primeiros resultados aparecem em 72 horas. ROI positivo comprovado em 30 dias. Nossos clientes veem aumento médio de 35% na conversão já no primeiro mês de uso.",
                },
                {
                  question: "Funciona para qualquer tipo de negócio?",
                  answer:
                    "Funciona melhor para empresas B2B com valor de venda a partir de R$ 2.000 e processo comercial estruturado. Indústria, energia solar, saúde corporativa e telecom são nossos casos de maior sucesso, mas adaptamos para diversos setores.",
                },
                {
                  question: "E se meu sistema for diferente dos outros?",
                  answer:
                    "Integramos com qualquer CRM ou sistema: HubSpot, Salesforce, Pipedrive, RD Station, ou até sistema proprietário desenvolvido internamente. Nossa equipe técnica especializada cuida de toda a integração sem complicação.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="p-8 border-l-4 border-l-blue-500 bg-white"
                >
                  <CardContent className="p-0">
                    <h3 className="font-bold text-gray-900 text-xl mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-3xl font-bold text-blue-400 mb-6 flex justify-center items-center">
              <img src={logo_branca} alt="Logo" className="h-10" />
            </div>

            <p className="text-gray-400 mb-12 text-lg">
              A solução de IA que substitui sua equipe de atendimento e vende 24
              horas por dia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
              <div className="p-6">
                <h4 className="font-bold mb-3 text-lg">
                  Implementação Express
                </h4>
                <p className="text-gray-400">48 horas para estar vendendo</p>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-3 text-lg">Suporte Dedicado</h4>
                <p className="text-gray-400">
                  Time especializado sempre disponível
                </p>
              </div>
              <div className="p-6">
                <h4 className="font-bold mb-3 text-lg">ROI Garantido</h4>
                <p className="text-gray-400">+50% conversão em 30 dias</p>
              </div>
            </div>
            <Separator className="my-8 bg-gray-700" />
            <p className="text-gray-500">
              © 2024 Invoicce.AI - Todos os direitos reservados
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
