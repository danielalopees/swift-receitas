'use client'

import { Card, Row, Col } from "react-bootstrap"

interface Stats {
  recipes: number
  likes: number
  ranking: number
}

interface UserStatsProps {
  stats: Stats
}

export function UserStats({ stats }: UserStatsProps) {
  return (
    <Card className="mt-3 shadow-sm">
      <Card.Body>
        <Row className="text-center">
          <Col className="border-end">
            <h4 className="fw-bold fs-5 mb-0">{stats.recipes}</h4>
            <p className="small text-muted mb-0">Receitas</p>
          </Col>
          <Col className="border-end">
            <h4 className="fw-bold fs-5 mb-0">{stats.likes}</h4>
            <p className="small text-muted mb-0">Likes</p>
          </Col>
          <Col>
            <h4 className="fw-bold fs-5 mb-0">#{stats.ranking}</h4>
            <p className="small text-muted mb-0">Ranking</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}